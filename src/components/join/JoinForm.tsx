// JoinForm.tsx — 报名表单（交互类 · 成员 D）

import { useState } from 'react';
import { initialForm, deptOptions } from '@data/index';
import type { SignUpFormData } from '@data/index';
import ResultModal from '@components/modal/ResultModal';

export default function JoinForm() {
  const [form, setForm] = useState<SignUpFormData>(initialForm);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('报名数据：', form);
    setShowSuccess(true);
  };

  return (
    <section id="register" className="section join">
      <div className="container">
        <h2 className="section__title fade-in">加入我们</h2>
        <form className="join__form fade-in" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">姓名 *</label>
            <input id="name" name="name" required value={form.name} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="studentId">学号 *</label>
            <input id="studentId" name="studentId" required value={form.studentId} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="college">学院 *</label>
            <input id="college" name="college" required value={form.college} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="phone">手机号 *</label>
            <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="qq">QQ（选填）</label>
            <input id="qq" name="qq" value={form.qq} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="department">意向部门 *</label>
            <select id="department" name="department" required value={form.department} onChange={handleChange}>
              <option value="">请选择</option>
              {deptOptions.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="introduction">自我介绍 *</label>
            <textarea
              id="introduction"
              name="introduction"
              rows={4}
              required
              value={form.introduction}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn--primary btn--block">
            提交报名
          </button>
        </form>
      </div>

      <ResultModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        message="欢迎加入常州工学院人工智能协会！我们将尽快与你联系。"
        details="请留意 QQ 群通知或短信，面试时间将通过你填写的联系方式告知。"
      />
    </section>
  );
}
