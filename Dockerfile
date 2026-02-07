# 1. 使用官方 Node.js 22 作为构建阶段
FROM node:22-alpine AS builder

# 2. 设置工作目录
WORKDIR /app

# 3. 复制 package.json 和 lock 文件，优化缓存
COPY package.json package-lock.json* yarn.lock* ./

# 4. 安装生产依赖
RUN npm ci

# 5. 复制所有项目文件
COPY . .

# 6. 运行 Next.js 构建
RUN npm run build

# 7. 仅拷贝生产环境文件到最终运行镜像
FROM node:22-alpine AS runner

# 8. 设置运行环境变量
ENV NODE_ENV production

# 9. 设置工作目录
WORKDIR /app

# 10. 复制必要文件
COPY --from=builder /app/package.json /app/
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/public /app/public

# 11. 开放端口（Next.js 默认使用 3000）
EXPOSE 3000

# 12. 运行 Next.js 应用
CMD ["npm", "run", "start"]
