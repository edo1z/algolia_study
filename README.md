## Algolia Study

### install

```
$ git clone git@github.com:edo1z/algolia_study.git
$ cd algolia_study
$ yarn install
```

### Algolia Setup

```
$ vim algolia.config.js
```

```algolia.config.js
import algoliasearch from 'algoliasearch'
const client = algoliasearch(
  'xxxxxxxxxxx',
  'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
);
export default client
```

### parcel

```
$ yarn global add parcel
$ parcel src/index.html
```
