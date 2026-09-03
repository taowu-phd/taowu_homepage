import { defineCollection, z } from 'astro:content';
// 1. 引入新版 Astro 的通配符加载器
import { glob } from 'astro/loaders';

const courseworks = defineCollection({
  // 告诉 Astro 去 src/content/courseworks 目录下找所有的 .md 文件
  loader: glob({ pattern: "**/*.md", base: "./src/content/courseworks" }),

  schema: z.object({
    title: z.string(),
    date: z.date().optional(),
    layout: z.string().optional(),
    // 新增 level 字段，限定只能填 'undergrad' 或 'grad'
    // default('undergrad') 表示如果不填，默认归类为本科课程
    level: z.enum(['undergrad', 'grad']).default('undergrad'),
    course: z.string().default('其他作业'),

    // 👇 作业提交信息
    deadline: z.coerce.date().optional(), 
    submit_link: z.string().optional(),
  }),
});

export const collections = {
  'courseworks': courseworks,
};