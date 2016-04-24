
function Picture(x, y, size)
{
	this.x = x || 0;
	this.y = y || 0;
	this.size = size || 100;
	this.vx = 2 - 4*Math.random();
	this.vy = 2 - 4*Math.random();
	return this;
}


Picture.initialize = function( sourceImg)
{
	this.img = new Image();
	this.img.src = sourceImg;
}

Picture.prototype.renderTo = function( context )
{
	context.save();
	context.translate( this.x, this.y )
	context.drawImage( Picture.img, 0, 0, 100,100 );
	context.restore();
}


Picture.prototype.hits = function( x, y )
{
	return x >= this.x
		&& x <= this.x + this.size
		&& y >= this.y
		&& y <= this.y + this.size;
}


Picture.prototype.move = function( bounds )
{
	this.x += this.vx;
	this.y += this.vy;

	if ( this.x < 0 )
	{
		this.x = 0;
		this.vx *= -1;
	}
	if ( this.x + this.size > bounds.width )
	{
		this.x = bounds.width - this.size;
		this.vx *= -1;
	}
	if ( this.y < 0 )
	{
		this.y = 0;
		this.vy *= -1;
	}
	if ( this.y + this.size > bounds.height )
	{
		this.y = bounds.height - this.size;
		this.vy *= -1;
	}
}