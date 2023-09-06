---

layout: default
title: Schedule + Class Notes

---

{% for week in site.data.schedule %}
# Week {{ week[0] }}
{{ site.data.class-dates[0].day }}, 
{{ site.data.class-dates[0]. date }}
{% endfor %}

