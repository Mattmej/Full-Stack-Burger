# Full-Stack-Burger

### Description

This project is another example of a full-stack application, but this time the functionality is spread across multiple files and folders for the purpose of modularity and memory efficiency. In addition, the duties of the server are distributed across the config, controllers, and models folders, and the front-end functionality is handled by a JavaScript web template system known as _Handlebars_.

### Required Items

### Node Packages
* Express
* body-parser
* express-handlebars
* mysql

##### Other
* Node.js
* Nodemon (optional)
* SQL IDE

### Details

This application has multiple interconnecting files with more modularity than the previous _FriendFinder_ application, so the file structure will be detailed below, followed by a description of each file.

Test

.
+-- _config.yml
+-- _drafts
|   +-- begin-with-the-crazy-ideas.textile
|   +-- on-simplicity-in-technology.markdown
+-- _includes
|   +-- footer.html
|   +-- header.html
+-- _layouts
|   +-- default.html
|   +-- post.html
+-- _posts
|   +-- 2007-10-29-why-every-programmer-should-play-nethack.textile
|   +-- 2009-04-26-barcamp-boston-4-roundup.textile
+-- _data
|   +-- members.yml
+-- _site
+-- index.html
