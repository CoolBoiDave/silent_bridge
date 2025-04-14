import React from "react";
import ModuleCard from "./ModuleCard";
import styles from "./LearningModules.module.css";

function LearningModules() {
	const modules = [
		"BAB 1 (Abjad Isyarat)",
		"BAB 2 (Angka)",
		"BAB 3 (Ungkapan Umum)",
		"BAB 4 (Hubungan)",
		"BAB 5 (Waktu & Hari)",
		"BAB 6 (Emosi & Perasaan)",
	];

	return (
		<section className={styles.modulesSection}>
			<div className={styles.modulesGrid}>
				{modules.map((module, index) => (
					<ModuleCard key={index} title={module} index={index} />
				))}
			</div>
		</section>
	);
}

export default LearningModules;
