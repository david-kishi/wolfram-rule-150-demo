// Draw stuff, with P5  // CF p5js.org/reference
// Time-stamp: <2020-02-02 14:46:00 Chuck Siska>
// ------------------------------------------------------------

// =====================================================  draw_grid ====
// Draw a fancy grid with major & minor lines 
// & major row/col numbers.
function draw_grid(rminor, rmajor, rstroke) {
    stroke(rstroke);
    let sz = g_canvas.cell_size;
    let width = g_canvas.wid * sz;
    let height = g_canvas.hgt * sz
    for (var ix = 0; ix < width; ix += rminor) {
        if (ix != 0) {
            let line_wgt = 0.25;
            strokeWeight(line_wgt);
            line(ix, 0, ix, height);
            strokeWeight(1);
        }
    }
    for (var iy = 0; iy < height; iy += rminor) {
        if (iy != 0) {
            let line_wgt = 0.25;
            strokeWeight(line_wgt);
            line(0, iy, width, iy);
            strokeWeight(1);
        }
    }
}