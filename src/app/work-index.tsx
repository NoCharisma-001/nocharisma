"use client";

import { useState } from "react";
import {
  STATUSES,
  STATUS_LABELS,
  projects,
  type Status,
} from "@/data/projects";

type Filter = Status | "all";

export function WorkIndex() {
  const [filter, setFilter] = useState<Filter>("all");

  const counts = STATUSES.reduce(
    (acc, status) => {
      acc[status] = projects.filter((p) => p.status === status).length;
      return acc;
    },
    {} as Record<Status, number>,
  );
  const visible =
    filter === "all" ? projects : projects.filter((p) => p.status === filter);
  const activeStatuses = STATUSES.filter((s) => counts[s] > 0);

  return (
    <>
      <div className="work-filters" role="group" aria-label="Filter projects by status">
        <button
          type="button"
          className="filter-chip"
          aria-pressed={filter === "all"}
          onClick={() => setFilter("all")}
        >
          All <span>{projects.length}</span>
        </button>
        {activeStatuses.map((status) => (
          <button
            type="button"
            key={status}
            className="filter-chip"
            aria-pressed={filter === status}
            onClick={() => setFilter(status)}
          >
            {STATUS_LABELS[status]} <span>{counts[status]}</span>
          </button>
        ))}
      </div>
      <p className="work-count" aria-live="polite">
        Showing {visible.length} of {projects.length}
      </p>

      <div className="project-index">
        {visible.map((project) => (
          <article className="project-row" key={project.slug}>
            <span className="project-number">{project.number}</span>
            <div className="project-title">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
            <dl className="project-meta">
              <div>
                <dt>Category</dt>
                <dd>{project.category}</dd>
              </div>
              <div>
                <dt>Updated</dt>
                <dd>{project.updated}</dd>
              </div>
            </dl>
            <div className="project-actions">
              <span className="status-badge" data-status={project.status}>
                {STATUS_LABELS[project.status]}
              </span>
              {project.url ? (
                <a className="project-link" href={project.url}>
                  {project.action ?? "Open"}
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
