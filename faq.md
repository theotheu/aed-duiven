---
layout: page
title: FAQ
active: FAQ
class: faq
---
<ul class="list-inline faqs">
  {% for post in site.categories.faq %}
    <li>
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
    </li>
  {% endfor %}
</ul>