---
outline: deep
sidebar: false
---

# Logbook Standards

Work in progress

## Header 2

Lorum ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod,
nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl

## Another header

::: tip
This is a tip.
:::

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

## Dynamic Content

The count is: {{ count }}

<button :class="$style.button" @click="count++">Increment</button>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>
