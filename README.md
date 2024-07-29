# Datcord Middleware for Typescript

This is a client middleware for the Datcord API.

This may not be the most optimal implementation, but it is the closest to the API.

### Syntax notes

tMessage - The static type for a message (derived from the API)
Message - The message class (implemented)
Fireball - The ID system used by Datcord and other projects of The P.A.I.N. Foundation.

Default values:
- Empty list: `[]`
- Empty record: `{}`
- Empty string: `""`
- Empty number: `0`
- Empty bool: `false`

The API avoids null and undefined values and will not process your request when supplying incomplete or incorrect types.

