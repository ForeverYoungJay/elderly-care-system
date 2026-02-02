# 养老管理系统 - 服务管理模块（全栈示例工程）

本工程从零实现“服务管理模块”，覆盖：

- 安全服务体系：门卫/消防/燃气/电梯/评估安全/探望安全/车辆安全等（以“巡检计划 + 任务 + 事件工单闭环”建模）
- 医疗服务体系：管理健康档案、定期评估、慢性病跟踪、日常体征监测、月度检查，并归档半年度报告。
- 膳食管理体系：覆盖早、中、晚、下午茶的餐次管理，并为慢性病老人提供特殊的膳食配置与下发。
- 护理员服务与考勤体系：包含护理服务项目、服务记录、考勤打卡、请假管理与服务质量抽查。
- 行政服务体系：基于角色的权限控制（RBAC），预设康养院长、护理部、护理员、行政办公室、医疗等权限体系。
- 外部机构服务管理：与民政局、医疗保障局等外部系统对接，实现数据报送、回执处理与失败重试机制。

## 目录

```text
elderly-care-system/
  docker-compose.yml
  backend/  (NestJS + TypeORM + PostgreSQL)
  frontend/ (React + Vite + Ant Design)
```

## 本地运行（推荐）

### 方式 A：Docker 一键启动（前后端 + DB）

在仓库根目录：

```bash
cd elderly-care-system
docker compose up --build -d
```

服务地址：

- 前端：`http://localhost:5173`
- 后端：`http://localhost:3000/api`

### 方式 B：本地开发（分开启动）

#### 1) 启动数据库

```bash
cd elderly-care-system
docker compose up -d postgres
```

数据库默认：

- host: `localhost`
- port: `5432`
- db: `elderly_care`
- user: `postgres`
- pass: `postgres`

#### 2) 启动后端

```bash
cd backend
npm install
npm run start:dev
```

后端地址：`http://localhost:3000/api`

首次启动会自动 `synchronize` 建表并写入种子数据（管理员账号/基础角色权限）。

默认管理员：

- username: `admin`
- password: `admin123`

#### 3) 启动前端

```bash
cd ../frontend
npm install
npm run dev
```

前端默认：`http://localhost:5173`

## API 说明（简要）

- `POST /api/auth/login`：登录获取 JWT
- `GET /api/admin/roles`、`POST /api/admin/roles`、`POST /api/admin/roles/assign`
- 安全：`/api/security/*`
- 医疗：`/api/medical/*`
- 膳食：`/api/diet/*`
- 护理考勤：`/api/nursing/*`
- 外部机构：`/api/external/*`

## 注意

- 该工程是“可运行的参考实现”，生产环境需补齐：迁移、审计、脱敏、加密、对象存储、设备接入、工作流引擎等。
