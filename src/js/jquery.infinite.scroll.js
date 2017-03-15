/* JQuery Infinite Scroll Plugin */

;(function($) {

	function JQueryInfiniteScroll (obj, url, opts)
	{
		this.init = function(obj, url, opts) {
			
			this.$obj = $(obj);
			this.url = url;
			this.opts = opts;
			this.offset = this.opts.offset;
			
			this.deploy();
		}
		
		this.deploy = function() {
			$(window).bind('scroll', $.proxy(this.scroll, this));
			$(this.opts.hide).hide();
		}
		
		this.isDataNeeded = function() {
			return $(window).scrollTop() >= $(document).height() - $(window).height() * this.opts.prediction;
		}
		
		this.isDataOver = function() {
			return this.nodata == true;
		}
		
		this.isLoading = function() {
			return this.loading == true;
		}
		
		this.load = function() {
			
			this.offset += this.opts.count;
			this.loading = true;
			
			$.ajax({
				url: this.url.replace('{offset}', this.offset).replace('{count}', this.opts.count),
				context: this,
			}).always(function(data, status, jqxhr) {
				this.loading = false;
				if ((status == 'success') && data.length) {
					this.$obj.append(data);
					this.opts.onload.call(this, this.$obj, data);
				} else {
					this.nodata = true;
					this.opts.onend.call(this, this.$obj);
				}
			});
		}
	
		this.scroll = function() {
			if (this.isDataNeeded() && !this.isDataOver() && !this.isLoading()) {
				this.load();
			}
		}
		
		this.init(obj, url, opts);
	}
	
	$.fn.infinite = function(url, options) {
	
		var defaults = {
			hide: '.pages,.pager,.perpage',
			count: 1,
			offset: 0,
			onload: function() {},
			onend: function() {},
			prediction: 2
		};
		
		var opts = $.extend(defaults, options);
		
		return this.each(function() { $(this).data('infinite', new JQueryInfiniteScroll(this, url, opts)); });
	}

})(jQuery);
