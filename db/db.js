module.exports = () => {
  const { faker } = require("@faker-js/faker")
  const lo = require("lodash")
  const casual = require("casual")
  const category = ["Football", "Music", "Life", "Nothing", "Fuck you", "Tuan dau buoi"]
  const posts = []

  for (const item of category) {
    posts.push({
      category: item,
      news: lo.times(5, function(n) {
          return {
            id: n + 1,
            url: casual.url,
            img: faker.image.avatar(),
            title: casual.title,
            description: casual.short_description,
            date: faker.date.between(),
          }
        })
    })
  }
  return {
    posts
  }
}
