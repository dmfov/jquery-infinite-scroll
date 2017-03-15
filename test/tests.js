
$('#inf').infinite('fixtures/{offset}.txt');
var inf = $('#inf').first().data('infinite');

describe('Basic functionality', function() {

  it('should load on scroll', function(done) {
    inf.opts.onload = sinon.spy();
    $('body').animate({ scrollTop: $(document).height() }, 'slow', function() {
    	expect(inf.opts.onload.args[0][1]).to.be('<div>1</div>');
    	done();
    });
  });
	
  it('should stop on end', function(done) {
    inf.opts.onend = sinon.spy();
    $('body').animate({ scrollTop: 5000 }, 'slow', function() {
    	expect(inf.opts.onend.called).to.be(true);
    	done();
    });
  });

});
