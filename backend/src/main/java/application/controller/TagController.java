package application.controller;

import application.model.tag.Tag;
import application.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TagController {
    @Autowired
    private TagService tagService;

    @GetMapping("/tags")
    public List<Tag> getTags() {
        return tagService.getTags();
    }

    @PostMapping(path = "/tag",
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public Tag addTag(@RequestBody Tag tag) {
        tagService.addTag(tag);
        return tag;
    }

    @PutMapping("/tag/{id}")
    Tag updateTag(@RequestBody Tag newTag, @PathVariable Long id) {
        return tagService.updateTag(id, newTag);
    }


    @DeleteMapping("/tag/{id}")
    public void deleteTag(@PathVariable Long id) {
        tagService.deleteTag(id);
    }

    @GetMapping("/tag/{id}")
    public Tag getTag(@PathVariable Long id) {
        return tagService.getTag(id);
    }

    @GetMapping("/tags/{query}")
    public List<Tag> getTags(@PathVariable String query) {
        return tagService.getTagsByQuery(query);
    }
}
