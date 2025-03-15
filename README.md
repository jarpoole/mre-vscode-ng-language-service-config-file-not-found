# mre-vscode-ng-language-service-config-file-not-found

Minimum reproducible example for https://github.com/angular/vscode-ng-language-service/issues/2149

## Reproduction

1. Reload the window with `Developer: Reload Window`
2. Open `libs/test/src/lib/parent.component.html`
3. Observe that hovering over the `lib-child` does nothing and that go to definition is not working
4. Observe that the language server shows the error message `[Error - 9:52:00 AM] No config file for /Users/jarpoole/mre-vscode-ng-language-service-config-file-not-found/libs/test/src/lib/parent.component.html`
5. Open `libs/test/src/lib/parent.component.ts` in a second window
6. Navigate back to `libs/test/src/lib/parent.component.html` and observe that suddenly the language service is now working!

## Steps taken to create this repo  

1. `npm init`
2. `npm install nx`
3. `npx nx init`
4. `npx nx add @nx/angular`
5. `npx nx g @nx/angular:lib libs/test`
