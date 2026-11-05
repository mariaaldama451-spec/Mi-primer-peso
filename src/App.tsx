import { useEffect, useState } from 'react';
import { LessonScreen } from '@/components/LessonScreen';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { StageCompleteScreen } from '@/components/StageCompleteScreen';
import { StartScreen } from '@/components/StartScreen';
import { ToolsScreen } from '@/components/tools/ToolsScreen';
import { STAGE_ONE_LESSONS } from '@/data/lessons';
import type { ToolId } from '@/data/tools';
import { useProgress } from '@/hooks/useProgress';

type View = 'start' | 'learning' | 'tools';

function App() {
  const { progress, answerLesson, advance, reset } = useProgress();
  const [view, setView] = useState<View>('start');
  const [tool, setTool] = useState<ToolId>('calculator');

  const hasSavedProgress = progress.lessonIndex > 0 || Object.keys(progress.answers).length > 0;
  const stageOneDone = progress.lessonIndex >= STAGE_ONE_LESSONS.length;
  const currentLesson = STAGE_ONE_LESSONS[progress.lessonIndex];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [progress.lessonIndex, view]);

  const openTool = (next: ToolId) => {
    setTool(next);
    setView('tools');
  };

  const handleRestart = () => {
    reset();
    setView('learning');
  };

  let content = null;
  if (view === 'start') {
    content = (
      <StartScreen
        hasSavedProgress={hasSavedProgress}
        stageOneDone={stageOneDone}
        onContinue={() => setView('learning')}
        onRestart={handleRestart}
        onOpenTool={openTool}
      />
    );
  } else if (stageOneDone) {
    content = <StageCompleteScreen onOpenTool={openTool} />;
  } else {
    content = (
      <div key={currentLesson.id} className="screen-enter">
        <LessonScreen
          lessonIndex={progress.lessonIndex}
          selectedOption={progress.answers[currentLesson.id]}
          onSelect={(optionIndex) => answerLesson(currentLesson.id, optionIndex)}
          onNext={advance}
        />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader onHome={() => setView('start')} onLessons={() => setView('learning')} />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
        <div hidden={view !== 'tools'}>
          <ToolsScreen tool={tool} onSelectTool={setTool} onBack={() => setView('learning')} />
        </div>
        {view !== 'tools' && content}
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
