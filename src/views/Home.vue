<script setup lang="ts">
import ArticleList from '@/components/ArticleList.vue'
import { Button } from '@/components/ui/button'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToEditor() {
  router.push(`/editor`)
}
</script>

<template>
  <div class="bg-background min-h-screen">
    <!-- 上部分：欢迎区域 -->
    <div class="min-h-[50vh] flex flex-col items-center justify-center border-b">
      <div class="text-center">
        <h1 class="mb-8 text-4xl font-bold">
          Doocs Markdown 编辑器
        </h1>
        <p class="text-muted-foreground mb-8 text-lg">
          一款高度简洁的微信 Markdown 编辑器
        </p>
        <Button size="lg" @click="goToEditor">
          开始编辑
        </Button>
      </div>
    </div>

    <!-- 下部分：文章列表 -->
    <div class="mx-auto flex justify-center">
      <ArticleList />
    </div>
  </div>
</template>

<style scoped>
.bg-background {
  background-color: hsl(var(--background));
}
</style>
