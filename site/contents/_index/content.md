## Typography
<p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, <strong>sed do eiusmod tempor</strong> incididunt ut labore et dolore magna aliqua. Ut enim ad <del>minim</del> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

Lorem ipsum dolor sit amet, <a href="#">consectetur adipisicing</a> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure <em>dolor in reprehenderit</em> in voluptate velit esse <strong>cillum dolore</strong> eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in <ins>culpa qui officia</ins> deserunt mollit anim id est laborum.

> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


## Breadcrumbs
The breadcrumbs module is built to dynamically change to display only the final item on mobile devices. This saves space, while still giving the user access to the breadcrumbs trail.
<ul class="breadcrumbs">
    <li><a href="#">Home</a></li>
    <li><a href="#">Sub-Page One</a></li>
    <li><a href="#">Sub-Page Two</a></li>
    <li class="last"><a href="#">Sub-Page Three</a></li>
</ul>

## Buttons
A small collection of common button styles for quick prototyping. As your layout matures, simply revisit these styles and modify them to suit your project's needs.
<h6>Base Size</h6>
<ul class="list inline my1">
  <li><button class="btn-ghost">Ghost Button</button></li>
  <li><button class="btn-round">Rounded Button</button></li>
  <li><button class="btn-pill">Pill Button</button></li>
</ul>
<h6>Large Alternative</h6>
<ul class="list inline my1">
  <li><button class="btn-ghost btn-lg">Ghost Button</button></li>
  <li><button class="btn-round btn-lg">Rounded Button</button></li>
  <li><button class="btn-pill btn-lg">Pill Button</button></li>
</ul>

## Forms
<form action="" class="my1">
    <label for="name">Name</label>
    <input type="text" id="name" title="Input your name." placeholder="Your name...">

    <div class="grd">
      <div class="row">
        <div class="col-2 my1">
          <label for="category">Select: </label>
          <fieldset>
              <select name="category" id="category" title="Select a category.">
                  <option value="0">Option One</option>
                  <option value="1">Option Two</option>
                  <option value="2">Option Three</option>
              </select>
          </fieldset>
        </div>
        <div class="col-2 my1">
          <label for="radio">Radio: </label>
          <fieldset>
              <label for="female">
                <input type="radio" name="gender" id="female" title="Select female.">
                Female
              </label>
              <label for="male">
                <input type="radio" name="gender" id="male" title="Select male.">
                Male
              </label>
          </fieldset>
        </div>
        <div class="col-2 my1">
          <label for="checkbox">Checkbox: </label>
          <fieldset>
              <label for="agree">
                <input type="checkbox" id="agree">
                Do you agree?
              </label>
          </fieldset>
        </div>
      </div>
    </div>
    <label for="message">Message</label>
    <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message..."></textarea>
    <input type="submit" class="btn-round my1" value="Submit">
</form>

## Grid
<div class="grd demo my1">
    <div class="row">
        <div class="col-1">
            <div class="box">.col-1</div>
        </div>
        <div class="col-5">
            <div class="box">.col-5</div>
        </div>
    </div>
    <div class="row">
        <div class="col-2">
            <div class="box">.col-2</div>
        </div>
        <div class="col-4">
            <div class="box">.col-4</div>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <div class="box">.col-3</div>
        </div>
        <div class="col-3">
            <div class="box">.col-3</div>
        </div>
    </div>
    <div class="row">
        <div class="col-4">
            <div class="box">.col-4</div>
        </div>
        <div class="col-2">
            <div class="box">.col-2</div>
        </div>
    </div>
    <div class="row">
        <div class="col-5">
            <div class="box">.col-5</div>
        </div>
        <div class="col-1">
            <div class="box">.col-1</div>
        </div>
    </div>
</div>

## Media
<div class="media">
    <div class="media-figure">
        <img src="http://fillmurray.com/100/100" alt="Media Figure">
    </div>
    <div class="media-body">
        <h6 class="m0">Hello World</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat tempora ipsam eos sunt dolore, dolor laudantium blanditiis veritatis ut distinctio temporibus voluptates magnam, minima. Obcaecati voluptate deleniti earum quis minima!</p>
    </div>
</div>
<div class="media">
    <div class="media-figure">
        <img src="http://fillmurray.com/100/100" alt="Media Figure">
    </div>
    <div class="media-body">
        <h6 class="m0">Hello World</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat tempora ipsam eos sunt dolore, dolor laudantium blanditiis veritatis ut distinctio temporibus voluptates magnam, minima. Obcaecati voluptate deleniti earum quis minima!</p>
    </div>
</div>

## Tables
Tables have remained one of the more difficult elements to style when developing for smaller screens. Cinch aims to keep tables as pure as possible and deliver the full table to the user no matter what device they are on. This clean and functional design is a great base that you can easily build upon using more sophisticated ways of handling tables on smaller devices.

<div class="table">
    <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Location</th>
                <th>Occupation</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Egon</td>
                <td>Spengler</td>
                <td>New York, NY</td>
                <td>Paranormal Investigator</td>
            </tr>
            <tr>
                <td>Peter</td>
                <td>Venkman</td>
                <td>New York, NY</td>
                <td>Paranormal Investigator</td>
            </tr>
            <tr>
                <td>Raymond</td>
                <td>Stantz</td>
                <td>New York, NY</td>
                <td>Paranormal Investigator</td>
            </tr>
            <tr>
                <td>Winston</td>
                <td>Zeddemore</td>
                <td>New York, NY</td>
                <td>Paranormal Investigator</td>
            </tr>
        </tbody>
    </table>
</div>
