import { EmptyState } from "./EmptyState";
import { TaskItem } from "./TaskItem";

const pageHeadings = {
  all: {
    title: "全部待辦事項",
    description: "同時查看進行中與已完成的項目。",
  },
  active: {
    title: "進行中",
    description: "專注處理還沒完成的工作。",
  },
  completed: {
    title: "已完成",
    description: "確認已結束的待辦事項。",
  },
};

export function TaskList({ currentPage, tasks, onToggleTask, onDeleteTask }) {
  const heading = pageHeadings[currentPage];

  return (
    <section className="task-list-shell">
      <div className="section-heading">
        <div>
          <p className="section-label">目前列表</p>
          <h2>{heading.title}</h2>
        </div>
        <p className="helper-copy">{heading.description}</p>
      </div>

      {tasks.length === 0 ? (
        <EmptyState currentPage={currentPage} />
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleTask={onToggleTask}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
