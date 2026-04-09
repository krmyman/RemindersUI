import { useMemo, useState } from "react";
import { PageTabs } from "./components/PageTabs";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";
import { initialTasks } from "./data/initialTasks";

const pages = [
  { id: "all", label: "全部" },
  { id: "active", label: "進行中" },
  { id: "completed", label: "已完成" },
];

const filterTasks = (tasks, currentPage) => {
  if (currentPage === "active") {
    return tasks.filter((task) => !task.completed);
  }

  if (currentPage === "completed") {
    return tasks.filter((task) => task.completed);
  }

  return tasks;
};

function App() {
  const [currentPage, setCurrentPage] = useState("all");
  const [tasks, setTasks] = useState(initialTasks);

  const visibleTasks = useMemo(
    () => filterTasks(tasks, currentPage),
    [currentPage, tasks],
  );

  const handleAddTask = (title) => {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return false;
    }

    setTasks((currentTasks) => [
      {
        id: crypto.randomUUID(),
        title: trimmedTitle,
        completed: false,
      },
      ...currentTasks,
    ]);

    return true;
  };

  const handleToggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleDeleteTask = (id) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-shell">
      <div className="background-orb background-orb-left" />
      <div className="background-orb background-orb-right" />

      <main className="app-panel">
        <section className="hero-section">
          <p className="eyebrow">Focused Task Board</p>
          <h1>用三個頁面掌握所有待辦事項</h1>
          <p className="hero-copy">
            預設深色模式，集中處理新增、完成與刪除。三個頁面共用同一份資料，只切換顯示條件。
          </p>
        </section>

        <section className="workspace-section">
          <PageTabs
            pages={pages}
            currentPage={currentPage}
            onChange={setCurrentPage}
          />

          <TaskInput currentPage={currentPage} onAddTask={handleAddTask} />

          <TaskList
            currentPage={currentPage}
            tasks={visibleTasks}
            onToggleTask={handleToggleTask}
            onDeleteTask={handleDeleteTask}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
