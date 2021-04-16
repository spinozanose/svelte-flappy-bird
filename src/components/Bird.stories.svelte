<script lang="ts">
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Bird from "./Bird.svelte"
</script>

<Meta
  title="Example/Bird"
  component={Bird}
  argTypes={{
    wings: { control: "radio", options: ["U", "D"]  },
    color: { control: "color" },
    size: {
      control: { type: "number" },
    },
    left: {
      control: { type: "number" },
    },
    top: {
      control: { type: "number" },
    },
  }}
/>

<Template let:args>
  <Bird {...args} />
</Template>

<Story
  name="WingsDown"
  args={{
    wings: "D",
    color: "yellow",
    left: 20,
    size: 20,
    top: 0
    }}
/>

<Story
  name="WingsUp"
  args={{
    wings: "U",
    color: "yellow",
    left: 20,
    size:20,
    top: 0
    }}
/>