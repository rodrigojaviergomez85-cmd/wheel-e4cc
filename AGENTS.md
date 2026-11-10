<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Games scoring/state logic lives as pure functions in src/lib/games/engine.ts (tested in src/test/games-engine.test.ts); the /games route only renders and wires overlays — keeps rules testable without the UI.
- Referee presentation decisions live in src/lib/games/referee.ts; derive tap hints from the unchanged engine and snapshot first-answer state alongside game state for Undo.
- Arena visual reactions are ephemeral presentation state derived from engine deltas; FX and reduced-motion gates never affect game state, history, or timers.
