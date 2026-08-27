# GNN-CB: A Graph Neural Network Competition Benchmark


Welcome to the official repository for the paper **"GNN-CB: A Graph Neural Network Competition Benchmark for Human and LLM Evaluation"**. GNN-CB is the **first competition-based benchmark** designed to evaluate both humans and large language models (LLMs) on graph neural network (GNN) coding tasks under controlled, reproducible competition settings.
[GNN-CB](https://basiralab.github.io/GNN-CB/).


---


## 📖 Introduction

Graph Neural Networks (GNNs) are central to modern graph machine learning, yet no benchmark has systematically evaluated whether LLMs can autonomously solve realistic **end-to-end GNN coding tasks**. GNN-CB bridges this gap.

**Key features:**

- **18 curated competitions** spanning node-, edge-, and graph-level prediction across 7 graph categories and 4 difficulty tiers.
- **Unified hidden-test evaluation pipeline** via automated GitHub Actions — identical conditions for all human and LLM submissions.
- **Three complementary protocols:** competition design, controlled human evaluation, and frozen-prompt LLM evaluation with bounded execute-and-repair loops.
- **Two LLM evaluation modes:** API-only non-agent and autonomous agent-based, supporting both proprietary and open-source models.
- **Living benchmark:** dynamic leaderboards, reproducible pipelines, and an open submission infrastructure.

---

## 🏗️ Benchmark Overview

GNN-CB contains **18 independent competitions** organized along two axes:

| Axis | Values |
|------|--------|
| **Graph Category** | Homogeneous, Heterogeneous, Temporal, Spatial, Hierarchical, Molecular, Generalization |
| **Difficulty** | Easy, Medium, Hard |
| **Task Type** | Node Classification, Edge Classification, Graph Classification, Graph Regression |
| **Domains** | Biomedical, Finance, Social, Cybersecurity, Neuroimaging, Academic, Urban, Bioprinting, medical |

### Competition Summary Table

| ID | Competition | Category | Difficulty | Task | Domain | Metric | Dataset |
|-----|-------------|----------|-----------|------|--------|--------|---------|
| C01 | PROVEN-GNN | Hetero | Med | Graph Classification | Cybersecurity | Macro-F1 | DiverseVul |
| C02 | CGCC | Homo | Hard | Graph Classification | Urban | Macro-F1 | OpenStreetMap |
| C03 | Real Or Fake! | Hier | Easy | Graph Classification | Social | Binary F1 | GossipCop |
| C04 | GLIMPS-GNN | Gen | Hard | Node Classification | Biomedical | F1 | GEO |
| C05 | GNN_BACE | Mol | Med | Graph Classification | Medical | Macro-F1 | BACE |
| C06 | DiaGraph | Homo | Hard | Node Classification | Medical | Macro-F1 | Kaggle Diabetes |
| C07 | GRAPE | Spatial | Med | Graph Classification | Medical | Macro-F1 | DRIVE/STARE/HRF |
| C08 | Liar Nodes | Homo | Easy | Node Classification | Biomedical | Accuracy | CancerSCEM |
| C09 | GraphFMD | Temp | Med | Node Classification | Finance | Macro-F1 | Elliptic |
| C10 | NetLinkArena | Homo | Med | Link Prediction | Academic | AUC-ROC | CiteSeer |
| C11 | PARK-GNN | Homo | Hard | Node Classification | Medical | Macro-F1 | UCI Parkinson's |
| C12 | GNN-CoRA | Homo | Med | Node Classification | Academic | Accuracy | Cora |
| C13 | GTA | Gen | Hard | Graph Classification | Bioinformatics | Macro-F1 | MUTAG |
| C14 | BrainAge | Homo | Easy | Graph Regression | Neuroimaging | MAE | OASIS-3 |
| C15 | OctoNode Cup | Homo | Med | Node Classification | Social | Macro-F1 | GitHub Social |
| C16 | Graph4ASD | Homo | Med | Graph Classification | Neuroimaging | Macro-F1 | ABIDE |
| C17 | Mix2Print | Homo | Hard | Graph Regression | Bioprinting | NMAE | CECT |
| C18 | THInC | Spatial | Hard | Node Classification | Biomedical | Macro-F1 | NuCLS |

Each competition repository includes: task README, dataset files, submission specification, evaluation metric, hidden test set, and automated GitHub Actions scoring pipeline.

---

## 🏆 Leaderboard

Below is a summary of LLM performance vs. human top across all 18 competitions:

| Model | Family | Mode | Easy (avg) | Med (avg) | Hard (avg) | Mean Gap ↓ |
|-------|--------|------|-----------|----------|-----------|------------|
| **Claude Opus 4.7** | Proprietary Reasoning | Agent | 0.987 | 0.728 | 0.543 | ↓ 0.148 |
| **Gemini 2.5 Pro** | Proprietary Reasoning | Non-Agent | 0.931 | 0.696 | 0.398 | ↓ 0.179 |
| **GPT-5.4 Codex** | Proprietary Reasoning | Agent | 0.865 | 0.714 | 0.531 | ↓ 0.182 |
| **Gemini-3 Flash** | Proprietary Chat | Non-Agent | 0.982 | 0.693 | 0.453 | ↓ 0.174 |
| **Claude Opus 4.6** | Proprietary Chat | Non-Agent | 0.968 | 0.721 | 0.487 | ↓ 0.163 |
| **DeepSeek-v4 Pro** | Open-source Reasoning | Non-Agent | 0.841 | 0.654 | 0.372 | ↓ 0.221 |
| **Kimi k2.6** | Open-source Chat | Non-Agent | 0.786 | 0.720 | 0.508 | ↓ 0.198 |
| **Qwen2.5-Coder 32B** | Open-source Chat | Non-Agent | 0.816 | 0.602 | 0.337 | ↓ 0.265 |
| **Llama-3.3 70B** | Open-source Chat | Non-Agent | 0.728 | 0.543 | 0.389 | ↓ 0.299 |
| **Human Top** | — | — | 0.987 | 0.854 | 0.756 | — |

---


## 👥 Human Evaluation Protocol

Human participants solve each competition under the following standardized constraints:

| Constraint | Value |
|-----------|-------|
| **Architecture** | GNN only (no CNN, RNN, or Transformers) |
| **Compute budget** | 3 CPU hours per task |
| **Random seed** | Fixed at `seed=25` |
| **Submissions** | 1 final submission per competition |
| **HP tuning runs** | ≤ 5 |
| **LLM assistance** | Low-level utility only; no task-specific context |

Each participant maintains a documentation log recording: hyperparameter search strategy, all configurations attempted, training time, hardware specs, and any LLM-assisted snippets. Prediction files are encrypted locally before upload via pull-request to prevent information leakage.

---

## 📊 Results Summary

**Human performance** exhibits substantial variability across tasks:
- Easy tasks (C03, C08, C14): high scores with low variance — participants reliably implement standard GNN pipelines.
- Hard tasks (C02, C04, C11, C18): lower averages and larger best–worst gaps — sensitive to architectural choices and optimization quality.

**LLM performance** stratifies clearly by difficulty:
- On Easy competitions, frontier models approach or match human top (e.g., Claude Opus 4.7 reaches 0.998 on C08).
- On Medium and Hard tasks, sizeable gaps persist (0.05–0.40 below human top).
- The **Best–Mean gap** (26–44 pp) indicates that no model reliably sustains its peak performance across diverse tasks.
- Two LLMs exceed human top on specific tasks: Kimi k2.6 on C09 GraphFMD (+0.153) and GPT-5.4 Codex on C13 GTA (+0.036).


---

## 📜 License

- **Code**: Released under the [MIT License](LICENSE).
- **Benchmark data and competition repositories**: Released under [CC BY-SA 4.0](LICENSE-DATA).
- All datasets are used under their original public licenses (MoleculeNet, Cora, OGB, OASIS-3 data-use agreement, Elliptic, GossipCop, GitHub Social Network, etc.). LLMs are accessed under providers' API terms of service.

---

## 📚 Citation

If you use **GNN-CB** in your work, please cite:

```bibtex
@inproceedings{gnncb2026,
  title     = {GNN-CB: A Graph Neural Network Competition Benchmark for Human and LLM Evaluation},
  author    = {Anonymous},
  booktitle = {Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing (EMNLP)},
  year      = {2026}
}
```

