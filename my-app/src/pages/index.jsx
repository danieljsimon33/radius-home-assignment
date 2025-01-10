import { useState } from "react";

import styles from "../app/page.module.css";
import { fetchLLMData } from "@/app/llm-functions";

export default function Home() {
  const [formData, setFormData] = useState({
    subject: "",
    age: "",
    description: "An introduction to this subject, 45 minute class.",
  });

  function handleTextChange(event) {
    setFormData({
      ...formData,
      description: event.target.value,
    });
  }

  function handleGradeChange(event) {
    setFormData({
      ...formData,
      age: event.target.value,
    });
  }

  function handleSubjectChange(event) {
    setFormData({
      ...formData,
      subject: event.target.value,
    });
  }

  function handleOnSubmit(e) {
    e.preventDefault();

    fetchLLMData(formData.subject, formData.age, formData.description);
  }

  return (
    <div className={styles.page}>
      <form onSubmit={() => handleOnSubmit}>
        <label htmlFor="select-subject">Subject:</label>
        <select id="select-subject" onSelect={handleSubjectChange} required>
          <option value="">--Please select a subject--</option>
          <option value="Writing">Writing</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Biology">Biology</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Physics">Physics</option>
        </select>

        <label htmlFor="select-age">Grade level:</label>
        <select id="select-age" onSelect={handleGradeChange} required>
          <option value="">--Please select a target grade level--</option>
          <option value="Preschool">Preschool</option>
          <option value="Kindergarten">Kindergarten</option>
          <option value="1st Grade">1st Grade</option>
          <option value="2nd Grade">2nd Grade</option>
          <option value="3rd Grade">3rd Grade</option>
          <option value="4th Grade">4th Grade</option>
          <option value="5th Grade">5th Grade</option>
          <option value="6th Grade">6th Grade</option>
          <option value="7th Grade">7th Grade</option>
          <option value="8th Grade">8th Grade</option>
          <option value="9th Grade">9th Grade</option>
          <option value="10th Grade">10th Grade</option>
          <option value="11th Grade">11th Grade</option>
          <option value="12th Grade">12th Grade</option>
        </select>

        <label htmlFor="input-details">Describe your lesson plan:</label>
        <input
          type="text"
          id="input-details"
          rows="5"
          cols="50"
          onChange={handleTextChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
