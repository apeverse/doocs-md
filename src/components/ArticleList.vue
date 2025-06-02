<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 模拟文章数据
const articles = ref([
  {
    id: 1,
    title: `如何使用 Markdown 编辑器`,
    description: `详细介绍 Doocs Markdown 编辑器的基本功能和使用方法`,
    date: `2024-03-20`,
    slug: `how-to-use-markdown-editor`,
  },
  {
    id: 2,
    title: `Markdown 语法指南`,
    description: `全面的 Markdown 语法说明和示例`,
    date: `2024-03-19`,
    slug: `markdown-syntax-guide`,
  },
  {
    id: 3,
    title: `编辑器高级功能`,
    description: `探索编辑器的图片上传、主题切换等高级功能`,
    date: `2024-03-18`,
    slug: `editor-advanced-features`,
  },
  {
    id: 4,
    title: `你好，世界`,
    description: `探索世界`,
    date: `2024-05-19`,
    slug: `hello-world`,
  },
])

function goToArticle(slug: string) {
  router.push({
    path: `/md`,
    query: { id: slug },
  })
}
</script>

<template>
  <div class="max-w-4xl w-full px-4 py-8">
    <h2 class="mb-6 text-2xl font-bold">
      最新文章
    </h2>
    <div class="grid gap-6">
      <div
        v-for="article in articles"
        :key="article.id"
        class="group hover:bg-muted cursor-pointer border rounded-lg p-4 transition-colors"
        @click="goToArticle(article.slug)"
      >
        <h3 class="group-hover:text-primary mb-2 text-lg font-semibold">
          {{ article.title }}
        </h3>
        <p class="text-muted-foreground mb-2 text-sm">
          {{ article.description }}
        </p>
        <time class="text-muted-foreground text-xs">{{ article.date }}</time>
      </div>
    </div>
  </div>
</template>
