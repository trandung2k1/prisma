# Prisma + MongoDB + Expressjs + TypeScript

### Run prisma studio

```js
npx prisma studio

```

### Generate

```js
npx prisma generate
```

### Create post

```js
await prisma.post.create({
    data: {
        title: 'Hi',
    },
});
```
