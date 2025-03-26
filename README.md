# Ausbildung.de code challenge

This repository is the result of Linda Giorgi's attempt at the Ausbildung.de code challenge.
NOTE: for UI/UX purpose, I added a logo to each customer, since it was too empty and my Frontend developer couldn't resist. Hope it is fine.

## Useful links

|                 |                                                                          |
| --------------- | ------------------------------------------------------------------------ |
| Source          | [Repository](https://github.com/giorgilinda/AusbildungDe_code_challenge) |
| Production link | [Vercel](https://ausbildung-de-code-challenge.vercel.app/)               |

## Installation

1. Clone the repo:

```bash
git clone https://github.com/giorgilinda/AusbildungDe_code_challenge.git
git checkout main
```

2. Install the modules of the project:

```bash
npm install
```

## Usage

Once the installation is complete, you can run the shop locally:

1. Run the shop locally:

```bash
npm run dev
```

2. Open http://localhost:3000 in your preferred browser to see the result.

## Technologies Used

Refer to the [package.json](https://github.com/giorgilinda/AusbildungDe_code_challenge/blob/main/package.json) for the latest information.
| Dependency | Version |
| ---------- | ---------- |
| Node | \>=20.14.1 |
| React | 19.0.0 |
| Next.js | \>=15.2.0 |
| TypeScript | \>=5.7.3 |
| Jest | \>=29.7.0 |
| Playwright | \>=1.50.1 |

## Project Structure

```shell
//FIXME: add structure
```

## Testing

Due to time restriction, I decided to create only an example of each type of tests:

1. unit testing (using Jest) for CustomersUtils.tsx.
2. for e2e testing (using Playwright) for AppClientWrapper.tsx.

NOTE: I noticed an error in the data, since the second customer have the same ID as the first, which, naturally, caused some missmatch. I changed the data so that we have unique IDs.

```bash
npm run test      # for unit testing
npm run test:e2e  # for e2e testing and integration
```

## Storybook

Due to time restriction, I decided to create only an example of one file with 2 variations of the component: CardDetails.stories.tsx

```bash
npm run storybook
```

Now you can access the storybook page from http://localhost:6006

## Deployment

1. You can generate an optimized production build with:

```bash
npm run build
```

2. To test the generated build, run:

```bash
npm run start
```

3. Open http://localhost:3000 in your preferred browser to see the result.
