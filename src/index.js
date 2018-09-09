import client from '../algolia.config'

const index = client.initIndex('demo_ecommerce')
index.search(
  {
	query: 'iPhone camera 32GB gold',
	ignorePlurals: true
  },
  function searchDone(err, content) {
	  if (err) throw err
	  console.log(content.hits)
  }
)
