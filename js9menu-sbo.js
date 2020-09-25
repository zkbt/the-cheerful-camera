/*
 * js9usermenus.js -- an example of how to define user menus in JS9.
 *
 * An array of four user menus objects (zooms, scales, colormaps, and regions)
 * that gets assigned to the JS9.globalOpts.userMenuBar property.
 *
 * Each user menu must have the following properties:
 * "name", "title" (menu title), "options" (array of option, see below).
 * Optional: "updateTitle" to update the menu title as it is changed:
 * "text" sets name, "image" sets image, "both" sets both.
 *
 * Each option should have a name, a public API command, and an array of
 * arguments to pass to that command.
 * Optional: image path of an image to display as a menu option.
 *
 * Note that, while these examples are subsets of top-level menus, a user menu
 * can contain any set of public API calls, e.g. a menu of most-used commands.
 *
 * Once you have created a file containing a JS9.globalOpts.userMenubar array,
 * you need to load it explicitly into your web page:
 *
 * <script type="text/javascript" src="js9usermenus.js"></script>
 *
 * and then either:
 *
 * set JS9.globalOpts.userMenus to true (to add user menus to all menubars)
 *
 * or:
 *
 * set the data-usermenus attribute to "true" on a specific menubar element:
 *
 * <div class="JS9Menubar" data-style="mac" data-usermenus="true"></div>
 *
 */

/*global JS9, sprintf */

JS9.globalOpts.userMenuBar = [
    {
	"name": "zoom",
	"title": "Zoom",
	"updateTitle": false,
	"options": [
	    {
		"name": "in",
		"shortcut": "zoom in",
		"cmd": "SetZoom",
		"args": ["in"]
	    },
	    {
		"name": "out",
		"shortcut": "zoom out",
		"cmd": "SetZoom",
		"args": ["out"]
	    },
      {
    "name": "to fit",
    "shortcut": "zoom to fit",
    "cmd": "SetZoom",
    "args": ["toFit"]
      }
	]
    },
    {
	"name": "scale",
	"title": "Color Scale",
	// eslint-disable-next-line no-unused-vars
	"updateTitle": (im, menuName, optionName) => {
	    let obj;
	    // if no image is loaded, just return main name
	    if( !im ){ return `Color Scale`; }
	    // get scale parameters for this image into an object
	    obj = JS9.GetScale({display: im});
	    // return title using backquotes to expand the variables
	    return `Color Scale (${obj.scale})`;
	},
	"options": [
	    {
		"name": "linear",
		"cmd": "SetScale",
		"args": ["linear"]
	    },
	    {
		"name": "log",
		"cmd": "SetScale",
		"args": ["log"]
	    }
	]
    },
    {
	"name": "colormap",
	"title": "Color Maps",
	"imageTitle": "https://js9.si.edu/js9/images/voyager/color_grey.png",
	"updateTitle": "image",
	"options": [
	    {
		"name": "grey",
		"image": "https://js9.si.edu/js9/images/voyager/color_grey.png",
		"cmd": "SetColormap",
		"args": ["grey"]
	    },
	    {
		"name": "cool",
		"image": "https://js9.si.edu/js9/images/voyager/color_cool.png",
		"cmd": "SetColormap",
		"args": ["cool"]
	    },
	    {
		"name": "heat",
		"image": "https://js9.si.edu/js9/images/voyager/color_heat.png",
		"cmd": "SetColormap",
		"args": ["heat"]
	    },
	    {
		"name": "viridis",
		"image": "https://js9.si.edu/js9/images/voyager/color_viridis.png",
		"cmd": "SetColormap",
		"args": ["viridis"]
	    },
	    {
		"name": "magma",
		"image": "https://js9.si.edu/js9/images/voyager/color_magma.png",
		"cmd": "SetColormap",
		"args": ["magma"]
	    },
	    {
		"name": "sls",
		"image": "https://js9.si.edu/js9/images/voyager/color_sls.png",
		"cmd": "SetColormap",
		"args": ["sls"]
	    },
	    {
		"name": "red",
		"image": "https://js9.si.edu/js9/images/voyager/color_red.png",
		"cmd": "SetColormap",
		"args": ["red"]
	    },
	    {
		"name": "green",
		"image": "https://js9.si.edu/js9/images/voyager/color_green.png",
		"cmd": "SetColormap",
		"args": ["green"]
	    },
	    {
		"name": "blue",
		"image": "https://js9.si.edu/js9/images/voyager/color_blue.png",
		"cmd": "SetColormap",
		"args": ["blue"]
	    },
	]
    },
    {
	"name": "regions",
	"title": "Regions",
	"imageTitle": "https://js9.si.edu/js9/images/voyager/regions_circle.svg",
	"updateTitle": "image",
	"options": [
      {
     "name": "circle",
     "cmd": "AddRegions",
     "image": "https://js9.si.edu/js9/images/voyager/regions_circle.svg",
     "args": ["circle"]
      },
      {
		"name": "ellipse",
		"cmd": "AddRegions",
		"image": "https://js9.si.edu/js9/images/voyager/regions_ellipse.svg",
		"args": ["ellipse"]
	    },
      {
		"name": "box",
		"cmd": "AddRegions",
		"image": "https://js9.si.edu/js9/images/voyager/regions_box.svg",
		"args": ["box"]
	    },
	    {
		"name": "line",
		"cmd": "AddRegions",
		"image": "https://js9.si.edu/js9/images/voyager/regions_line.svg",
		"args": ["line"]
	    },
	    {
		"name": "polygon",
		"cmd": "AddRegions",
		"image": "https://js9.si.edu/js9/images/voyager/regions_polygon.svg",
		"args": ["polygon"]
      },
      {
    "name": "point",
    "cmd": "AddRegions",
    "image": "https://js9.si.edu/js9//images/voyager/regions_point.svg",
    "args": ["point"]
      }
	]
    },

];
