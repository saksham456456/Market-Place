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
            print("Home Page Verified")

            # 2. Categories Page
            print("Navigating to Categories...")
            page.click("text=Categories")
            page.wait_for_selector("text=BROWSE BY CATEGORY")
            page.wait_for_selector("text=Tech")
            page.wait_for_selector("text=Fashion")
            page.screenshot(path="verification/6_categories.png")
            print("Categories Page Verified")

            # 3. Deals Page
            print("Navigating to Deals...")
            page.click("text=Deals")
            page.wait_for_selector("text=FLASH DEALS")
            # Check for discount badge
            page.wait_for_selector("text=%")
            page.screenshot(path="verification/7_deals.png")
            print("Deals Page Verified")

            # 4. Search
            print("Testing Search...")
            # Click Logo to go home (it's a link, not a button)
            page.click("a:has-text('FLUX')")
            page.wait_for_selector("text=FUTURE MARKET")

            # Click search icon
            page.click(".lucide-search")
            # Type in search box
            page.fill("input[placeholder='Search...']", "Hoodie")
            page.press("input[placeholder='Search...']", "Enter")

            page.wait_for_selector("text=Search Results for")
            page.wait_for_selector("text=Neon Flux Hoodie")
            page.screenshot(path="verification/8_search_results.png")
            print("Search Verified")

            # 5. Login & Profile
            print("Testing Login Flow...")
            page.click("a[href='/login']")
            page.wait_for_selector("text=Welcome Back")
            page.fill("input[type='email']", "test@test.com")
            page.fill("input[type='password']", "password")
            page.click("button:has-text('Login')")

            page.wait_for_selector("text=Order History")
            page.wait_for_selector("text=Cyber Nomad") # Default mock name
            page.screenshot(path="verification/9_profile.png")
            print("Login & Profile Verified")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")
            raise e
        finally:
            browser.close()

if __name__ == "__main__":
    verify_flux()
