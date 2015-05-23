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
<div class="grd is-my1">
    <div class="row">
        <div class="col-6">
            <h6>Base Size</h6>
            <button class="btn-ghost">Ghost Button</button>
            <button class="btn-round">Rounded Button</button>
            <button class="btn-pill">Pill Button</button>
        </div>
    </div>
</div>
<div class="grd is-my1">
    <div class="row">
        <div class="col-6">
            <h6>Large Alternative</h6>
            <button class="btn-ghost btn-lg">Ghost Button</button>
            <button class="btn-round btn-lg">Rounded Button</button>
            <button class="btn-pill btn-lg">Pill Button</button>
        </div>
    </div>
</div>

## Forms
<form action="" class="is-my1">
    <label for="name">Name</label>
    <input type="text" id="name" title="Input your name." placeholder="Your name...">

    <div class="grd">
      <div class="row">
        <div class="col-2">
          <label for="category">Select: </label>
          <select name="category" id="category" title="Select a category.">
              <option value="0">Option One</option>
              <option value="1">Option Two</option>
              <option value="2">Option Three</option>
          </select>
        </div>
        <div class="col-2">
          <label for="radio">Radio: </label>
          <label for="female">
            <input type="radio" name="gender" id="female" title="Select female.">
            Female
          </label>
          <label for="male">
            <input type="radio" name="gender" id="male" title="Select male.">
            Male
          </label>
        </div>
        <div class="col-2">
          <label for="checkbox">Checkbox: </label>
          <label for="agree">
            <input type="checkbox" id="agree">
            Do you agree?
          </label>
        </div>
      </div>
    </div>
    <label for="message">Message</label>
    <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message..."></textarea>
    <input type="submit" class="btn-round" value="Submit">
</form>

## Grid
<div class="grd is-my1">
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
        <h6 class="is-m0">Hello World</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat tempora ipsam eos sunt dolore, dolor laudantium blanditiis veritatis ut distinctio temporibus voluptates magnam, minima. Obcaecati voluptate deleniti earum quis minima!</p>
    </div>
</div>
<div class="media">
    <div class="media-figure">
        <img src="http://fillmurray.com/100/100" alt="Media Figure">
    </div>
    <div class="media-body">
        <h6 class="is-m0">Hello World</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat tempora ipsam eos sunt dolore, dolor laudantium blanditiis veritatis ut distinctio temporibus voluptates magnam, minima. Obcaecati voluptate deleniti earum quis minima!</p>
    </div>
</div>

## Tables
Tables have remained one of the more difficult decisions to make when determining how to display them on smaller screens. With Cinch, we've opted to keep them as pure as possible, while still giving users on smaller devices the full functionality they expect.

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
