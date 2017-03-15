# JQuery Infinite Scroll Plugin

Tiny infinite scroll for JQuery.

## Example usage

Load plugin:

```html
<div id="data"></div>
<script src="js/jquery.infinite.scroll.js"></script>
<script>
	$('.photos').infinite('/data.php?offset={offset}');
</script>
```

##Options

- **hide** - selector to hide elements when plugin loaded
- **offset** - starting offset (default: `0`)
- **count** - offset increment (default: `1`)
- **onload** - function called when data loaded (arguments: obj, data)
- **onend** - function called when no data left (arguments: obj)
- **prediction** - how many screens left when load more data (default `2`)

## License

Apache License Version 2.0