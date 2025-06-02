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
    <div class="min-h-[50vh] flex flex-col items-center justify-center border-b px-4">
      <div class="max-w-2xl w-full text-center">
        <h1 class="mb-4 text-2xl font-bold md:mb-8 md:text-4xl">
          Doocs Markdown 编辑器
        </h1>
        <p class="text-muted-foreground mb-6 text-base md:mb-8 md:text-lg">
          一款高度简洁的微信 Markdown 编辑器
        </p>
        <Button size="lg" class="text-base md:text-lg" @click="goToEditor">
          开始编辑
        </Button>
      </div>
    </div>

    <!-- 下部分：文章列表 -->
    <div class="mx-auto flex justify-center px-4 py-6 md:py-8">
      <ArticleList />
    </div>
  </div>
</template>

<style scoped>
.bg-background {
  background-color: hsl(var(--background));
}
</style>
