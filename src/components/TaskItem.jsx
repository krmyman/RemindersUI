export function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li className={`task-item${task.completed ? " is-completed" : ""}`}>
      <button
        type="button"
        className={`task-toggle${task.completed ? " is-completed" : ""}`}
        onClick={() => onToggleTask(task.id)}
        aria-pressed={task.completed}
        aria-label={task.completed ? "標記為未完成" : "標記為已完成"}
      >
        <span className="task-toggle-indicator" />
      </button>

      <div className="task-copy">
        <p>{task.title}</p>
        <small>{task.completed ? "已完成" : "進行中"}</small>
      </div>

      <button
        type="button"
        className="task-delete"
        onClick={() => onDeleteTask(task.id)}
      >
        刪除
      </button>
    </li>
  );
}
