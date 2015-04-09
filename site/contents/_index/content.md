### Breadcrumbs
The breadcrumbs module is built to dynamically change to display only the final item on mobile devices. This saves space, while still giving the user access to the breadcrumbs trail.
<ul class="breadcrumbs">
    <li><a href="#">Home</a></li>
    <li><a href="#">Ghostbusters</a></li>
    <li><a href="#">Ghostbusters II</a></li>
    <li class="last"><a href="#">Ghostbusters III?</a></li>
</ul>

### Buttons
Here are a few button styles you get you started. We use these buttons to quickly prototype layouts. As those layouts mature, we revisit the button classes and customize them to fit our project needs.
<div class="grd">
    <div class="row">
        <div class="col-6">
            <h6>Base Size</h6>
            <button class="btn-ghost">Ghost Button</button>
            <button class="btn-round">Rounded Button</button>
            <button class="btn-pill">Pill Button</button>
        </div>
    </div>
</div>
<div class="grd">
    <div class="row">
        <div class="col-6">
            <h6>Large Alternative</h6>
            <button class="btn-ghost btn-lg">Ghost Button</button>
            <button class="btn-round btn-lg">Rounded Button</button>
            <button class="btn-pill btn-lg">Pill Button</button>
        </div>
    </div>
</div>

### Forms
<form action="" class="">
    <label for="name">Name</label>
    <input type="text" id="name" title="Input your name." placeholder="Harold Ramis">

    <div class="grd">
      <div class="row">
        <div class="col-2">
          <label for="category">Category</label>
          <select name="category" id="category" title="Select a category.">
              <option value="0">Ghost</option>
              <option value="1">Demon</option>
              <option value="2">Monster</option>
          </select>
        </div>
        <div class="col-2">
          <label for="gender">Gender</label>
          <input type="radio" name="gender" title="Select male."> Male
          <input type="radio" name="gender" title="Select female."> Female
        </div>
        <div class="col-2">
          <label for="agree">Agree</label>
          <input type="checkbox" id="agree"> Do you agree?
        </div>
      </div>
    </div>
    <label for="message">Message</label>
    <textarea name="message" id="message" cols="30" rows="10" placeholder="Who ya gonna call?"></textarea>
    <input type="submit" class="btn-round" value="Submit">
</form>

### Grid
<div class="grd">
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

### Media
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

### Tables
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
