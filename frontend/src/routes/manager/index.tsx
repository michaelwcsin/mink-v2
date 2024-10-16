import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/manager/')({
  component: () => <div>Hello /manager/!</div>,
})
