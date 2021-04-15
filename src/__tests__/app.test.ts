import { fireEvent, render } from "@testing-library/svelte";
import App from "../App.svelte";

describe('App', () => {
  test("app should render", async () => {
    const results = render(App)
    const container = results.container
    expect(container).toBeTruthy()
    const main = container.querySelector("main")
    expect(main).toBeTruthy()
    const sections = main.querySelectorAll("section")
    expect(sections).toBeTruthy()
    expect(sections).toHaveLength(6)
  }
)});