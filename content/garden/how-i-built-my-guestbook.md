---
title: How I built my guestbook
description: ""
---
_At the time of writing, March 1, 2025, I just launched my [guestbook](/guestbook). I managed to build it in under an hour once I connected the dots, but it took me years to get there. I'm using this page to document what I did, and to document improvements I may make in the future._

My website is built using static site generator [Hugo](https://gohugo.io/), which I like for its flexibility. In the IndieWeb community, static site generators are notoriously awkward. It's much more of a hassle to [POSSE](https://indieweb.org/POSSE), [Micropub](https://indieweb.org/Micropub), or create your own [guestbook](https://indieweb.org/guestbook). Using the steps below, it was quite straight-forward for me to create one.

### Guestbook workflow
1. Users fill out name, an optional website, and a message 
2. Netlify detects new entry
3. Some Javascript displays the entry on the guestbook page
4. I get a notification to check the entry

### Step 1: Create Guestbook page with form
In my Hugo content folder I created `guestbook.md`, adding the frontmatter property `layout: guestbook`. In `guestbook.html`, I added a top section with a page title and content populating whatever I put in the Markdown file. Below that, I added a simple form:

```
      <form id="guestbook-form" class="bg-gray-50 rounded-lg p-4" action="/submitted" method="POST" data-netlify="true" name="guestbook" netlify netlify-honeypot="not-for-humans" data-netlify-recaptcha="true">
        <p style="display: none;">
          <label>Don’t fill this out if you're human: <input name="not-for-humans" /></label>
        </p>
        <p class="m-0 p-0">
          <label>
            <div class="mb-1">
              <div>Name</div>
            </div>
            <input required class="p-2 rounded block w-full" placeholder="Kimmy Schmidt" type="text" name="name" />
          </label>
        </p>
        <p class="m-0 p-0">
          <label>
            
            <div class="mb-1">
              <div>Website</div>
            </div>
            <input class="p-2 rounded block w-full"  placeholder="https://unbreakab.le" type="text" name="website" /></label>
        </p>
        <p class="m-0 p-0">
          <label>
            <div class="mb-1">
              <div>Message</div>
              <div class="text-sm text-secondary mb-2">Write whatever you want; please remember to be kind. If you plan to write a long entry, write your own post and <a href="/hello" class="underline">send me the link</a> instead!
              </div>
            </div>
            <textarea required id="message" name="message" placeholder="Hey Zinzy, I just wanted to say..." class="p-2 rounded block w-full h-56"></textarea></label>
        </p>
        <div class="flex justify-center my-10"><div data-netlify-recaptcha="true"></div></div>
        <p class="m-0 p-0 text-right">
          <button type="submit" class="button" id="submit-btn">Submit</button>
        </p>
      </form>
```