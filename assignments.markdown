---

layout: default
title: Assignments

---
<div class="assignments" markdown="1">
<div class="column-1" markdown="1">

## Assignments
The semester is comprised of a series of project-based assignments. All assignments—including attachments—should be submitted via NYU Brightspace.

## Submitting Assignments
1. Log into NYU Brightspace with your NYU NetID and password.
2. Select the appropriate class.
3. Navigate to assignments and the corresponding assignment.
4. Add whatever comments you may need to your submission.
5. If file attachments are required, compress them and use the following naming convention: lastname_firstname_assignmentnumber.
6. Attach files as necessary, making sure that the file appears as an attachment before you continue.
7. When you are ready, submit your work and wait for confirmation before closing the browser window.  

<br> 
Once you have submitted an assignment you can only resubmit it up until the time it is due. Make sure that what you are submitting is the final version of your work.

## Policies

Do your best to keep up with assignments. 10% will be deducted for each class day late, with a possible maximum of 30% being deducted for each assignment. Homework will not be accepted past the third class after its assigned due date without prior permission. Likewise, no assignments will be accepted after the final exam.

Assignments that you turn in should be your own work. It’s fine to talk to other students and to get assistance in how to do something, but you should not ask another person or algorithm to do the work for you. For reference, here is the Computer Science Department’s [statement on academic integrity](https://cs.nyu.edu/home/undergrad/policy.html).

</div>



<div class="column-2">


{% for page in site.pages %}
    {% if page.layout == "assignments" %}
        {% if page.live == true %}
        <h2><a href="{{ page.url | relative_url }}"> {{ page.title }}</a></h2>
        {% else %}
        <h2>{{ page.title }}</h2>
        {% endif %}  
        <p><strong>{{ page.topic }}</strong></p>
        <p>Due date: {{ page.due-date}}</p>
    {% endif %}      
{% endfor %}


</div>


</div>