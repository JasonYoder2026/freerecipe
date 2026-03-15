# FreeRecipe
## Because recipes aren't meant to be secret.

---

## Development Documentation

Our development documentation can be found [here](development.md).

## App flow
The system is a very basic client to server model.

```mermaid
flowchart TD
    A["Angular (Client)"]  <--> B
    B["ASP.NET (Server)"] <--> C
    C["PostgreSQL Database"]
```
