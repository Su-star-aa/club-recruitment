// Departments.tsx — 部门介绍（展示类）
// 成员 C

import { departments } from '@data/index';

export default function Departments() {
  return (
    <section id="departments" className="section departments">
      <div className="container">
        <h2 className="section__title fade-in">部门介绍</h2>
        <div className="departments__grid">
          {departments.map((dept) => (
            <article key={dept.name} className="department-card fade-in">
              <h3>{dept.name}</h3>
              <p>{dept.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
