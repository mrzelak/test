package application.service;

import application.model.tag.Tag;
import application.payroll.TagNotFoundException;
import application.repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagService {
    @Autowired
    private TagRepository tagRepository;

    public List<Tag> getTags() {
        return tagRepository.findAll();
    }

    public void addTag(Tag tag) {
        tagRepository.save(tag);
    }

    public Tag getTag(Long id) throws TagNotFoundException {
        return tagRepository.findById(id)
                .orElseThrow(() -> new TagNotFoundException(id));
    }

    public Tag updateTag(Long id, Tag newTag) throws TagNotFoundException {
        Tag tag = tagRepository.findById(id)
                .orElseThrow(() -> new TagNotFoundException(id));
        tag.setTagName(newTag.getTagName());

        return tagRepository.save(tag);
    }

    public void deleteTag(Long id) {
        tagRepository.deleteById(id);
    }

    public List<Tag> getTagsByQuery(String query) {
        return tagRepository.findByTagNameContaining(query);
    }
}
