from markdown import markdown
from sys import argv
from pathlib import Path

if len(argv) == 1 or len(argv) > 2:
	print("usage: makeSlides \"<footer-text>\"")

footer_text = argv[1]
slide_number = 1
slides = ""
with open("template_base.html") as file:
	base_template = file.read()
with open("template_slide.html") as file:
	slide_template = file.read()

slide_dir = Path("./slides")
num_slides = len(list(slide_dir.iterdir()))
for p in slide_dir.iterdir():
	with p.open() as file:
		slide_markdown = file.read()
	slide_html = markdown(slide_markdown)
	slides += slide_template.format(content=slide_html,
			footer_text=footer_text, 
			slide_number="{}/{}".format(slide_number, num_slides))
	slide_number += 1

print(base_template.format(slides=slides))
