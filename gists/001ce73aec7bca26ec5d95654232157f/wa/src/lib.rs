#[unsafe(no_mangle)]
pub extern "C" fn calc(n: u64) -> f64 {
    let mut pi_over_4 = 0.0;
    for i in 0..n {
        let term = 1.0 / (2.0 * i as f64 + 1.0);
        if i % 2 == 0 {
            pi_over_4 += term;
        } else {
            pi_over_4 -= term;
        }
    }
    pi_over_4 * 4.0
}
