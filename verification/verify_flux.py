from playwright.sync_api import sync_playwright

def verify_flux():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            # 1. Home Page
            print("Navigating to Home Page...")
            page.goto("http://localhost:3000")
            page.wait_for_selector("text=FUTURE MARKET")
            page.screenshot(path="verification/1_home.png")
            print("Home Page Verified")

            # 2. Add to Cart (Navigate to first product)
            print("Navigating to Product Page...")
            page.click("text=CyberPunk Headset X1")
            page.wait_for_selector("text=Add to Cart")
            page.screenshot(path="verification/2_product.png")

            # Click Add to Cart
            page.click("text=Add to Cart")
            page.wait_for_selector("text=Added to Cart")
            print("Product Added to Cart")

            # 3. Cart Page
            print("Navigating to Cart...")
            page.click("a[href='/cart']")
            page.wait_for_selector("text=Shopping Cart")
            page.screenshot(path="verification/3_cart.png")
            print("Cart Verified")

            # 4. Checkout
            print("Navigating to Checkout...")
            page.click("text=Proceed to Checkout")
            page.wait_for_selector("text=Shipping Information")
            page.screenshot(path="verification/4_checkout.png")

            # Fill form
            page.fill("input[placeholder='First Name']", "John")
            page.fill("input[placeholder='Last Name']", "Doe")
            page.fill("input[placeholder='Address']", "123 Cyber Lane")
            page.fill("input[placeholder='City']", "Neo Tokyo")
            page.fill("input[placeholder='ZIP Code']", "90210")
            page.fill("input[placeholder='Card Number']", "4242424242424242")
            page.fill("input[placeholder='MM/YY']", "12/25")
            page.fill("input[placeholder='CVC']", "123")

            # Submit
            print("Submitting Order...")
            page.click("button:has-text('Pay')")

            # 5. Tracking
            page.wait_for_selector("text=Order Confirmed!")
            page.screenshot(path="verification/5_tracking.png")
            print("Order Tracking Verified")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_flux()
