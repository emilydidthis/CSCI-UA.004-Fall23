---

layout: default
title: Schedule + Class Notes

---
<!-- https://idratherbewriting.com/documentation-theme-jekyll/mydoc_yaml_tutorial.html#example-1-simple-mapping -->

<!-- every time you see a hyphen in the YAML, you use a for loop -->

<!-- WEEK LOOP -->
{% assign class_num = 0 %} <!-- create counter variable -->
{% for week in site.data.schedule.schedule %}

## Week {{ week.week_number }}

<!-- CLASS LOOP -->
{% for class in week.classes %}
<!-- print date for day -->
{{ site.data.class-dates[class_num].day }}, 
{{ site.data.class-dates[class_num].date }}
<!-- increment day counter -->
{% assign class_num = class_num | plus: 1 %}
<div class="week" markdown="1">

<!--------------------- TOPICS --------------------------->
<div class="week-column topics" markdown="1">

### Topics
{% for topic in class.topics %}
{{ topic }}
{% endfor%}

</div>

<!--------------------- ASSIGNED --------------------------->
{% if class.assigned[0].size > 0 %} <!-- only create div if there is content-->
<div class="week-column assigned" markdown="1">

### Assigned
<!-- Due:   -->
{% for hw in class.assigned %}
- {{ hw }}
{% endfor%}

</div>
{% endif %}
<!--------------------- MATERIALS --------------------------->

{% if class.files[0].name.size > 1 %} <!-- only create div if there is content-->
<div class="week-column materials" markdown="1">

### Materials
<!-- https://jekyllrb.com/docs/liquid/tags/#linking-to-posts -->

{% for file in class.files %}
{% if file.type == "code" %}
  <a href="{{ site.url }}{{ site.baseurl }}{{ file.path }}" >`{{ file.name }}`</a>
{% elsif file.type == "external code" %}
  <a href="{{ file.path }}" >`{{ file.name }}`</a>
{% elsif file.type == "download" %}
  <a href="{{ site.url }}{{ site.baseurl }}{{ file.path }}" >*{{ file.name }}*</a>
{% else %}
  <a href="{{ site.url }}{{ site.baseurl }}{{ file.path }}" >{{ file.name }}</a>
{% endif %}
{% endfor %}

 </div> <!-- end of Materials -->
{% endif %}
</div>
<br> 

{% endfor %}
{% endfor %}
