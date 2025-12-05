Dependency upgrade notes

- Updated `react-dom` from ^18.0.0 to ^19.2.1 to match `react` (^19.2.1) and resolve peer dependency conflict that caused `npm audit fix` to fail.
- Removed `react-helmet-async` v2.0.5 (in `dependencies`) because it has a peer dependency requiring React 18 or earlier ("^16.6.0 || ^17.0.0 || ^18.0.0"). The codebase currently does not use `react-helmet-async` (no imports found), so removing it avoids blocking the upgrade.

Why:
- Keeping `react` and `react-dom` aligned resolves the conflicting peer dependency errors and allows applying security patches for React 19.

Next steps:
- Run `npm install` and `npm audit fix` to update the lockfile and apply security fixes.
- If `react-helmet-async` is needed later, upgrade to a version that supports React 19 or find an alternative package.

Commands to run locally (PowerShell):

```pwsh
npm install
npm audit fix
```
