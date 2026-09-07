import re
import glob

section_ids = set()

for filepath in glob.glob('frontend/src/pages/*.jsx'):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Find all <section> tags
    # We can just look for id="page-section-..." just before the audio block
    matches = re.findall(r'id="page-section-([a-f0-9]+)".*?sqs-block-audio', content)
    for m in matches:
        section_ids.add(m)

css = "\n/* Remove huge gap around audio player sections */\n"
for sid in section_ids:
    css += f'section[data-section-id="{sid}"],\n'
    css += f'section[data-section-id="{sid}"] .content-wrapper,\n'

# Remove the trailing comma and newline
if css.endswith(',\n'):
    css = css[:-2] + ' {\n  min-height: 0 !important;\n  padding-bottom: 0 !important;\n  padding-top: 0 !important;\n}\n'

print("CSS generated:")
print(css)

with open('frontend/override.css', 'a') as f:
    f.write(css)

print("Appended to override.css")
