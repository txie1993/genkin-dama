# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Projects

- `GET /api/projects`
  - `Projects index/search`
- `POST /api/projects`
- `GET /api/projects/:id`
- `PATCH /api/projects/:id`
- `DELETE /api/projects/:id`

### Backing

- `GET /api/projects/:id/backing`
- `POST /api/projects/:id/backing`
- `GET /api/projects/:id/backing/:id`
- `DELETE /api/projects/:id/backing`
- `GET /api/projects/:id/backing`
### Rewards

- `POST /api/backing/:id/rewards`
- `GET /api/backing/:id/rewards/:id`
- `DELETE /api/backing/:id/rewards`

### Tags
- `GET /api/tags`
- `POST /api/projects/:id/tags`
- `DELETE /api/projects/:id/tags/:name`
